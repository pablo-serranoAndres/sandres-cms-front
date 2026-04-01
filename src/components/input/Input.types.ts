type OptionType = {
  id: string;
  value: string;
  text: string;
};

export interface InputProps {
  id: string;
  type: React.HTMLInputTypeAttribute | "textarea" | "select";
  label?: string;
  placeholder?: string;
  name?: string;
  defaultValue?: string;
  options?: OptionType[];
  background: "transparent" | "filled";
}
