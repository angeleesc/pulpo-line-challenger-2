"use client";
import { OptionsTabsType } from "@/types/tabOptions";
import React from "react";
import "./tab-button.scss";

type MenuTabOptionPropsType = {
  options: OptionsTabsType[];
  setOption: (value: string) => void;
  currentOption: String;
};

export default function MenuTabOption({
  options,
  currentOption,
  setOption,
}: MenuTabOptionPropsType) {
  return (
    <div className="w-full  flex justify-between lg:justify-start fixed top-[60px] left-0  lg:static">
      {options.map((option, i) => {
        return (
          <button
            key={i}
            onClick={() => setOption(option.value || "Default")}
            className={
              currentOption === option.value
                ? "tab-button tab-button-active"
                : "tab-button  tab-button-disable"
            }
          >
            {option.title}
          </button>
        );
      })}
    </div>
  );
}
