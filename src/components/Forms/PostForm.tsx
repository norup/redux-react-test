import React from "react";
import { IPost } from "../../models/IPost";
import { Formik } from "formik";
import "./index.css";
import { PostFormValidationSchema } from "../validation-schemes/PostFormValidationSchema";

interface PostFormProps {
  post: IPost | null;
  onSubmit: (post: IPost) => void;
}

const PostForm = ({ post, onSubmit }: PostFormProps) => {
  return (
    <Formik<IPost>
      initialValues={{
        id: post?.id,
        title: post?.title || "",
        content: post?.content || "",
        timestamp: post?.timestamp || Math.floor(Date.now() / 1000),
      }}
      validationSchema={PostFormValidationSchema}
      onSubmit={(values) => {
        values.timestamp = Math.floor(Date.now() / 1000);
        onSubmit(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="post-form">
          <input
            className={errors.title ? "error" : ""}
            placeholder="Введите заголовок"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <textarea
            className={errors.content ? "error" : ""}
            placeholder="Введите контент"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <button type="submit" className="button">
            {post ? "Изменить" : "Создать"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default PostForm;
