import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconTerminal2,
} from "@tabler/icons-react";

export function InterestsSection() {
  const features = [
    {
      title: "Phillosophy",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Science Fiction",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Anime & Game",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Literature",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Spirituality",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Music",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="relative z-10 mx-auto max-w-7xl py-10">
      {/* First row - 4 items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.slice(0, 4).map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            index={index}
            isFirstRow={true}
          />
        ))}
      </div>

      {/* Second row - 2 items centered */}
      <div className="flex justify-center flex-col md:flex-row">
        {features.slice(4, 6).map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            index={index + 4}
            isFirstRow={false}
          />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  isFirstRow,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isFirstRow: boolean;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10",
        isFirstRow && [
          "border-trsp lg:border-l",
          index === 0 && "border-trsp lg:border-b",
          "border-trsp lg:border-b",
        ],
        !isFirstRow && ["border-trsp lg:border-r", "lg:w-1/4"],
        index === 4 && "border-trsp w-full lg:border-l",
        index === 5 && "border-trsp w-full lg:border-r",
      )}
    >
      {isFirstRow && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-900 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      {!isFirstRow && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-900 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-100">{icon}</div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-emerald-500" />
        <span className="inline-block text-neutral-100 transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-500">
        {description}
      </p>
    </div>
  );
};
