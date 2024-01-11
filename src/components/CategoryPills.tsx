import React from "react";
import { Button } from "./Button.tsx";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export const CategoryPills: React.FC<CategoryPillProps> = ({ categories, selectedCategory, onSelect }) => (
  <div className="overflow-x-auto">
    <div className="flex whitespace-nowrap gap-3">
      {categories.map(category => (
        <Button key={category} onClick={() => onSelect(category)} variant={selectedCategory === category ? "dark" : "default"} className="py-1 px-3 rounded-lg whitespace-nowrap">
          {category}
        </Button>
      ))}
    </div>
  </div>
);
