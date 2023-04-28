import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
    body,
    setBody,
    head,
    setHead,
    feet,
    setFeet,
    legs,
    setLegs,
    animationIndex,
    setAnimationIndex,
    totalAnimations,
    totalBody,
    totalHead,
    totalFeet,
    totalLegs,
  } = useCustomization();

  const prevAnimation = () => {
    if (animationIndex > 0) {
      setAnimationIndex(animationIndex - 1);
    } else {
      setAnimationIndex(totalAnimations - 1);
    }
  };
  const nextAnimation = () => {
    if (animationIndex < totalAnimations - 1) {
      setAnimationIndex(animationIndex + 1);
    } else {
      setAnimationIndex(0);
    }
  };

  const prevBody = () => {
    if (body > 0) {
      setBody(body - 1);
    } else {
      setBody(totalBody-1);
    }
  };
  const nextBody = () => {
    if (body < totalBody-1) {
      setBody(body + 1);
    } else {
      setBody(0);
    }
  };

  const prevHead = () => {
    if (head > 0) {
      setHead(head - 1);
    } else {
      setHead(totalHead-1);
    }
  };
  const nextHead = () => {
    if (head < totalHead-1) {
      setHead(head + 1);
    } else {
      setHead(0);
    }
  };

  const prevFeet = () => {
    if (feet > 0) {
      setFeet(feet - 1);
    } else {
      setFeet(totalFeet-1);
    }
  };
  const nextFeet = () => {
    if (feet < totalFeet-1) {
      setFeet(feet + 1);
    } else {
      setFeet(0);
    }
  };

  const prevLegs = () => {
    if (legs > 0) {
      setLegs(legs - 1);
    } else {
      setLegs(totalLegs-1);
    }
  };
  const nextLegs = () => {
    if (legs < totalLegs-1) {
      setLegs(legs + 1);
    } else {
      setLegs(0);
    }
  };

  return (
    <div
      className="configurator"
      style={{
        position: "fixed",
        color: "white",
        right: "24px",
        top: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#5b4f4f",
        padding: "8px",
        borderRadius: "10px",
      }}
    >
      <div
        className="configuration"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        ANIMATION
        <div className="buttons">
          <button onClick={prevAnimation}>Prev</button>
          <button onClick={nextAnimation}>Next</button>
        </div>
      </div>
      <div
        className="configuration"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        HEAD
        <div className="buttons">
          <button onClick={prevHead}>Prev</button>
          <button onClick={nextHead}>Next</button>
        </div>
      </div>
      <div
        className="configuration"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        BODY
        <div className="buttons">
          <button onClick={prevBody}>Prev</button>
          <button onClick={nextBody}>Next</button>
        </div>
      </div>
      <div
        className="configuration"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        LEGS
        <div className="buttons">
          <button onClick={prevLegs}>Prev</button>
          <button onClick={nextLegs}>Next</button>
        </div>
      </div>
      <div
        className="configuration"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        FEET
        <div className="buttons">
          <button onClick={prevFeet}>Prev</button>
          <button onClick={nextFeet}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
