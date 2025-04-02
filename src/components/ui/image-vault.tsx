"use client";
import React, { useState, useEffect, useRef } from "react";
import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const EnhancedAsciiShapeCard = ({
  imageSrc,
  className,
  cellSize = 16, // Larger cell size for more visible ASCII
  brightColor = "rgb(0, 255, 136)",
  darkColor = "rgba(255, 255, 255, 0.3)",
}: {
  imageSrc: string;
  className?: string;
  cellSize?: number;
  brightColor?: string;
  darkColor?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");
  const [asciiMap, setAsciiMap] = useState<{char: string, intensity: number}[][]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Generate initial random string
  useEffect(() => {
    let str = generateRandomString(15000);
    setRandomString(str);
  }, []);

  // Process the image to create an ASCII map
  useEffect(() => {
    if (!imageSrc) return;

    const img = new Image();
    img.onload = () => {
      if (!canvasRef.current || !containerRef.current) return;

      // Set dimensions based on container size
      const containerRect = containerRef.current.getBoundingClientRect();
      setDimensions({
        width: containerRect.width,
        height: containerRect.height
      });

      const canvas = canvasRef.current;
      canvas.width = containerRect.width;
      canvas.height = containerRect.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Scale image to fit the canvas while maintaining aspect ratio
      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      // Create ASCII map
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const cols = Math.floor(canvas.width / cellSize);
      const rows = Math.floor(canvas.height / cellSize);

      const map: {char: string, intensity: number}[][] = [];

      // Characters from darkest to brightest
      const asciiChars = " .,:;i1tfLCG08@";

      for (let i = 0; i < rows; i++) {
        map[i] = [];
        for (let j = 0; j < cols; j++) {
          // Calculate average brightness for this cell
          let totalBrightness = 0;
          let pixelCount = 0;
          let hasEdge = false;

          // Edge detection variables
          let minBrightness = 255;
          let maxBrightness = 0;

          for (let sy = 0; sy < cellSize; sy++) {
            for (let sx = 0; sx < cellSize; sx++) {
              const x = j * cellSize + sx;
              const y = i * cellSize + sy;

              if (x < canvas.width && y < canvas.height) {
                const index = (y * canvas.width + x) * 4;
                const r = imageData.data[index];
                const g = imageData.data[index + 1];
                const b = imageData.data[index + 2];
                const alpha = imageData.data[index + 3];

                // Skip transparent pixels
                if (alpha < 50) continue;

                // Calculate brightness (0-255)
                const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

                totalBrightness += brightness;
                pixelCount++;

                // Track min/max for edge detection
                minBrightness = Math.min(minBrightness, brightness);
                maxBrightness = Math.max(maxBrightness, brightness);
              }
            }
          }

          // If cell has pixels and there's significant brightness variation, it might be an edge
          const brightnessDiff = maxBrightness - minBrightness;
          hasEdge = pixelCount > 0 && brightnessDiff > 50;

          // Average brightness for the cell
          const avgBrightness = pixelCount > 0 ? totalBrightness / pixelCount : 0;
          const normalizedBrightness = pixelCount > 0 ? avgBrightness / 255 : 0;

          // Select character based on brightness or edge
          let charIndex;
          if (hasEdge) {
            charIndex = asciiChars.length - 1; // Use brightest character for edges
          } else {
            charIndex = Math.round(normalizedBrightness * (asciiChars.length - 1));
          }

          // Pick ASCII character and random character
          const asciiChar = asciiChars[charIndex];
          const randomChar = randomString.charAt((i * cols + j) % randomString.length);

          // Decide whether to show random character or ASCII character
          const char = pixelCount > 0 ? randomChar : ' ';
          const intensity = normalizedBrightness;

          map[i][j] = { char, intensity };
        }
      }

      setAsciiMap(map);
    };

    img.src = imageSrc;
  }, [imageSrc, cellSize, randomString]);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    // Randomize string on mouse move
    const str = generateRandomString(15000);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5",
        className,
      )}
      ref={containerRef}
    >
      <canvas ref={canvasRef} className="hidden" />

      <div
        onMouseMove={onMouseMove}
        className="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
      >
        <div className="pointer-events-none">
          {/* Base dark gradient background */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-900 to-black opacity-80"></div>

          {/* ASCII art */}
          <div className="absolute inset-0 rounded-2xl">
            {asciiMap.length > 0 && (
              <AsciiDisplay
                asciiMap={asciiMap}
                randomString={randomString}
                mouseX={mouseX}
                mouseY={mouseY}
                cellSize={cellSize}
                brightColor={brightColor}
                darkColor={darkColor}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AsciiDisplay = ({
  asciiMap,
  randomString,
  mouseX,
  mouseY,
  cellSize,
  brightColor,
  darkColor
}: {
  asciiMap: {char: string, intensity: number}[][];
  randomString: string;
  mouseX: any;
  mouseY: any;
  cellSize: number;
  brightColor: string;
  darkColor: string;
}) => {
  const rows = asciiMap.length;
  const cols = asciiMap[0].length;

  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <>
      {/* Dark ASCII that's always visible */}
      <div className="absolute inset-0" style={{
        color: darkColor,
        fontSize: `${cellSize * 0.8}px`,
        lineHeight: `${cellSize}px`,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        letterSpacing: '-1px'
      }}>
        <pre style={{ margin: 0 }}>
          {asciiMap.map((row, i) => (
            <div key={i} style={{ display: 'flex' }}>
              {row.map((cell, j) => {
                // Get a consistent random character for this position
                const charIndex = (i * cols + j) % randomString.length;
                const char = cell.char !== ' ' ? randomString[charIndex] : ' ';
                return <span key={j}>{char}</span>;
              })}
            </div>
          ))}
        </pre>
      </div>

      {/* Bright ASCII that appears under cursor */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100"
        style={{
          ...style,
          color: brightColor,
          fontSize: `${cellSize * 0.8}px`,
          lineHeight: `${cellSize}px`,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          letterSpacing: '-1px',
          textShadow: '0 0 5px rgba(0, 255, 136, 0.7)'
        }}
      >
        <pre style={{ margin: 0 }}>
          {asciiMap.map((row, i) => (
            <div key={i} style={{ display: 'flex' }}>
              {row.map((cell, j) => {
                // Use the same random character for consistency
                const charIndex = (i * cols + j) % randomString.length;
                const char = cell.char !== ' ' ? randomString[charIndex] : ' ';
                return <span key={j}>{char}</span>;
              })}
            </div>
          ))}
        </pre>
      </motion.div>
    </>
  );
};

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default EnhancedAsciiShapeCard;
