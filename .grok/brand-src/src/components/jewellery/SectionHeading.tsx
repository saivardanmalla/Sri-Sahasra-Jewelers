import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading-lg mt-3">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-charcoal/60">{subtitle}</p>}
    </motion.div>
  );
}
