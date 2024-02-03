import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] gap-3`}>
      <p className="font-bold text-[20px]">0{number}</p>
    </div>
  </div>
);

export default StartSteps;
