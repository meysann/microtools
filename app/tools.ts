// app/tools.ts

export interface Tool {
    name: string;
    slug: string;
    icon: string; // Emoji or icon string for UI
  }
  
  export const tools: Tool[] = [
    { name: "BMI Calculator", slug: "bmi", icon: "⚖️" },
    { name: "Temperature Converter", slug: "temperature", icon: "🌡️" },
    { name: "Date Converter", slug: "date", icon: "📅" },
    { name: "Timezone Converter", slug: "timezone", icon: "🕰️" },
    { name: "Word Counter", slug: "word-counter", icon: "✍️" },
    { name: "Age Calculator", slug: "age-calculator", icon: "🎂" }, // ✅ fixed
  ];
  