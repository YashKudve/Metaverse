import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] m-4 rounded-[24px] bg-[#323f5d] gap-3`}>
      <p className="font-bold text-[20px]">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;
