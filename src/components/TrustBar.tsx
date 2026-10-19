import { FileText, Globe2, Scale, Users } from "lucide-react";

const HIGHLIGHTS = [
  { icon: <Scale size={22} strokeWidth={1.4} />, label: "Prevenção de erros e retrabalho" },
  { icon: <Globe2 size={22} strokeWidth={1.4} />, label: "Atendimento humanizado" },
  { icon: <FileText size={22} strokeWidth={1.4} />, label: "Análise individual do seu caso" },
  { icon: <Users size={22} strokeWidth={1.4} />, label: "Organização documental" },
];

function TrustBar() {
  return (
    <section className="trust" aria-label="Diferenciais">
      <ul className="container trust-list">
        {HIGHLIGHTS.map((item, index) => (
          <li
            key={item.label}
            className="trust-item reveal"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <span className="icon-tile">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TrustBar;
