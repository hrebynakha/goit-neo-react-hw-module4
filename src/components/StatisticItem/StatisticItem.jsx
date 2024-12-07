import { IconContext } from "react-icons";
import css from "./StatisticItem.module.css";

export const StatisticItem = ({ icon: Icon, color = "#FFFFFF", value }) => {
  return (
    <div className={css.item}>
      <IconContext.Provider value={{ color: color, size: "25px" }}>
        <Icon />
      </IconContext.Provider>
      {value}
    </div>
  );
};

export default StatisticItem;
