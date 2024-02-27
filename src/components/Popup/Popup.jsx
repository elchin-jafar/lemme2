import ReactDom from "react-dom";
import styles from "./popup.module.css";
import { IconContext } from "react-icons";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { usePopupStore } from "../../store/popupStore";

function Popup() {
  const isOpen = usePopupStore((state) => state.isOpen);
  const close = usePopupStore((state) => state.close);
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div className={styles.overlay}></div>
      <div className={styles.popup}>
        <p className={styles["popup-text"]}>
          Bu məlumat sizin üçün yararlı oldu?
        </p>
        <div className={styles.icons}>
          <IconContext.Provider value={{ color: "#17823B", size: "4.4rem" }}>
            <div>
              <BiSolidLike />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#E72F57", size: "4.4rem" }}>
            <div>
              <BiSolidDislike />
            </div>
          </IconContext.Provider>
        </div>
        <Link onClick={close} className={styles["popup-btn"]} to="..">
          Geriyə
        </Link>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Popup;
