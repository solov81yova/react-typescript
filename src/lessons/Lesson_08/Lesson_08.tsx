import { ButtonControl, PageWrapper } from "./styles";
import Button from "components/Button/Button";

function Lesson_08() {
  const isBlue = false;
  return (
    <PageWrapper>
      {/* //2-й подход стилизации, мы его не используем
    //   style={{ backgroundColor: isBlue ? "blue" : "red" }} */}
      <ButtonControl>
        <Button
          name="Simple Button"
          onClick={() => {
            console.log("I am Simple Button");
          }}
        />
      </ButtonControl>
      <ButtonControl>
        <Button
        isDeleteVariant={false}
          name="Delete Button"
          onClick={() => {
            console.log("I am Delete Button");
          }}
        />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Lesson_08;
