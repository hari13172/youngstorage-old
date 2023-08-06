import Button from "@/component/button";

export default function Verify() {
  return <Check />;
}

const Check = () => {
  return (
    <div className="verify-container">
      <div className="verify">
        <div className="lottie">
          <lottie-player
            background="transparent"
            speed="1"
            autoplay
            loop
            src="/mail.json"
            width="30px"
          ></lottie-player>
        </div>
        <div className="test">
          <h1>Please verify your Email address</h1>
          <h4>
            Hii <b>USERNAME</b>, Check your email and click verify to enjoy pur
            services
          </h4>
          <span>
            Email:<b>demo@demo.comvat</b>
          </span>
          <Button value="explor" className="explore"></Button>
        </div>
      </div>
    </div>
  );
};
