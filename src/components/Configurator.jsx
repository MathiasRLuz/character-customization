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
    if (body > 1) {
      setBody(body - 1);
    } else {
      setBody(totalBody);
    }
  };
  const nextBody = () => {
    if (body < totalBody) {
      setBody(body + 1);
    } else {
      setBody(1);
    }
  };

  const prevHead = () => {
    if (head > 1) {
      setHead(head - 1);
    } else {
      setHead(totalHead);
    }
  };
  const nextHead = () => {
    if (head < totalHead) {
      setHead(head + 1);
    } else {
      setHead(1);
    }
  };

  const prevFeet = () => {
    if (feet > 1) {
      setFeet(feet - 1);
    } else {
      setFeet(totalFeet);
    }
  };
  const nextFeet = () => {
    if (feet < totalFeet) {
      setFeet(feet + 1);
    } else {
      setFeet(1);
    }
  };

  const prevLegs = () => {
    if (legs > 1) {
      setLegs(legs - 1);
    } else {
      setLegs(totalLegs);
    }
  };
  const nextLegs = () => {
    if (legs < totalLegs) {
      setLegs(legs + 1);
    } else {
      setLegs(1);
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
