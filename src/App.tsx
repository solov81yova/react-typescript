import GlobalStyles from "styles/GlobalStyles";

// HOMEWORKS
import Homework_06 from "homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_08 from "homeworks/Homework_08/Homework_08";
import Homework_09 from "homeworks/Homework_09/Homework_09";

// LESSONS
import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";
//CONSULTATIONS
import Consultation_03 from "consultations/Consultation_03/Consultation_03";



function App() {
  return (
    <>
      <GlobalStyles />
      {/* LESSONS */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09/> */}
      <Lesson_11 />
      {/* HOMEWORKS */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08/> */}
      {/* <Homework_09/> */}
      {/* CONSULTATIONS */}
      {/* <Consultation_03 /> */}
    </>
  );
}

export default App;

