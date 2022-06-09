import * as Yup from "yup";
export const PostFormValidationSchema = Yup.object().shape({
  title: Yup.string().required("Поле должно быть заполнено"),
  content: Yup.string().required("Поле должно быть заполнено"),
});
