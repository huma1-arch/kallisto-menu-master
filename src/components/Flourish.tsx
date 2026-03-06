import flourishImg from "@/assets/flourish.png";

interface FlourishProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Flourish = ({ className = "", size = "md" }: FlourishProps) => {
  const sizeClasses = {
    sm: "w-32 md:w-48",
    md: "w-48 md:w-72",
    lg: "w-64 md:w-96",
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src={flourishImg}
        alt=""
        className={`${sizeClasses[size]} opacity-60`}
        loading="lazy"
      />
    </div>
  );
};

export default Flourish;
