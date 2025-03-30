"use client";
import React, { useEffect, useState } from "react";
import Loadercomponent from "@/components/loader";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  contributions: Week[];
}

interface ProfileData {
  totalRepositories: number;
  bio: string;
}

export default function GithubCalendarSection() {
  // State for GitHub contributions
  const [contributionData, setContributionData] =
    useState<ContributionData | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const username = "rihitoRiku";
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchGitHubData = async () => {
      const contributionQuery = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
            repositories {
              totalCount
            }
            bio
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: contributionQuery,
            variables: { username },
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        const user = result.data?.user;
        const calendar = user?.contributionsCollection?.contributionCalendar;

        if (!calendar)
          throw new Error("Invalid data structure received from GitHub API");

        setContributionData({
          totalContributions: calendar.totalContributions || 0,
          contributions: calendar.weeks || [],
        });

        setProfileData({
          totalRepositories: user?.repositories?.totalCount || 0,
          bio: user?.bio || "",
        });
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username, token]);

  const getColor = (count: number): string => {
    if (count === 0) return "bg-neutral-900";
    if (count < 5) return "bg-green-800";
    if (count < 10) return "bg-green-600";
    return "bg-green-400";
  };

  const days = ["Mon", "Wed", "Fri"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthLabels: { label: string; index: number }[] = [];
  let lastMonth: number | null = null;

  contributionData?.contributions.forEach((week, index) => {
    const firstDayOfWeek = new Date(week.contributionDays[0].date);
    const currentMonth = firstDayOfWeek.getMonth();

    if (currentMonth !== lastMonth) {
      monthLabels.push({ label: months[currentMonth], index });
      lastMonth = currentMonth;
    }
  });

  return (
    <div>
      {loading ? (
        <div className="mt-20 flex h-64 w-full items-center justify-center">
          <Loadercomponent />
        </div>
      ) : error ? (
        <div className="flex h-64 w-full items-center justify-center text-red-500">
          Error: {error}
        </div>
      ) : (
        <div className="mt-20 flex flex-col items-center justify-center pt-8 px-6">
          <div className=" text-neutral-300 relative mx-auto max-w-screen-lg text-sm"></div>
          <div className=" mb-4 text-xl">
            My Github Contribution Calendar
          </div>
          <div className="border-trsp flex w-full flex-col justify-center rounded-md border px-6 py-4 lg:w-[60rem]">
            <div className="flex items-center justify-between">
              <div className="text-neutral-200 text-start mb-2 text-sm font-semibold">
                {contributionData?.totalContributions} contributions in the last
                year
              </div>
              <div className="text-neutral-200 text-end mb-2 text-sm font-semibold">
                {profileData?.totalRepositories} total repositories
              </div>
            </div>

            <div className=" max-w-max overflow-x-scroll overflow-y-hidden">
              <div className="mt-2 flex w-max flex-col rounded">
                <div className="flex w-[60rem]">
                  <div className=" mr-2 flex flex-col justify-evenly text-xs">
                    {days.map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>
                  <div className="w-full">
                    <div
                      className="grid gap-x-0.5 gap-y-1"
                      style={{
                        gridTemplateColumns: `repeat(${contributionData?.contributions.length}, minmax(0, 1fr))`,
                        gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                      }}
                    >
                      {contributionData?.contributions.map((week, weekIndex) =>
                        week.contributionDays.map((day, dayIndex) => (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className={`h-3 w-3 ${getColor(
                              day.contributionCount,
                            )} rounded-[3px]`}
                            style={{
                              gridRow: dayIndex + 1,
                              gridColumn: weekIndex + 1,
                            }}
                            title={`${day.contributionCount} contributions on ${day.date}`}
                          />
                        )),
                      )}
                    </div>
                    <div className=" mt-2 flex justify-between text-xs">
                      {monthLabels.map(({ label, index }) => (
                        <div key={index} className="text-center">
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-2 flex items-center justify-end text-xs">
              <span className="me-1">Less</span>
              <div className="ml-1 flex gap-1">
                {[0, 4, 9, 15].map((count) => (
                  <div
                    key={count}
                    className={`h-3 w-3 ${getColor(count)} rounded-[3px]`}
                  />
                ))}
              </div>
              <span className="ms-1">More</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
