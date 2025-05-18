import { FaPizzaSlice, FaHamburger, FaGlassMartiniAlt } from "react-icons/fa";
import Tags from "../Tags";

export default function Nav() {
  return (
    <div>
      <nav className="flex items-start justify-start gap-4 w-full overflow-x-auto p-2">
        <Tags
          label="Combo"
          icon={<i className="bi bi-box"></i>}
         
          select={true}
        />
        <Tags
          label="Bebidas"
          icon={<i className="bi bi-fork-knife"></i>}
          select={false}
        />
        <Tags
          label="Hambúrgueres"
          icon={<FaHamburger size={15} />}
          select={false}
        />
        <Tags
          label="Pizza"
          icon={<FaPizzaSlice size={14} />}
          select={false}
        />
        <Tags
          label="Bebidas"
          icon={<i className="bi bi-cup-straw"></i>}
          select={false}
        />
        <Tags
          label="Drinks"
          icon={<FaGlassMartiniAlt size={14} />}
          select={false}
        />
      </nav>
    </div>
  );
}
