const TextInput = ({
  isDarkMode = false,
  value = "",
  handleInputChange,         // expects: (value: string) => void
  textarea = false,
  label = "",
}) => {
  const Input = textarea ? "textarea" : "input";

  const base =
    "w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none";
  const theme = isDarkMode
    ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800/70"
    : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white";

  return (
    <div className="relative text-left">
      <Input
        {...(!textarea ? { type: "text" } : {})} // don't pass type to textarea
        className={`${base} ${theme} relative overflow-hidden`}
        value={value ?? ""}                       // keep it controlled
        onChange={(e) => handleInputChange(e.target.value)} // ✅ send only value
        placeholder={label}                       // optional; you already have a label
        aria-label={label}
        autoComplete="off"
      />
      <label className="text-sm absolute left-4 top-2 pointer-events-none origin-left">
        {label}
      </label>
    </div>
  );
};

export default TextInput;
