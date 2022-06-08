import React from "react";
import { IPost } from "../models/IPost";
import { Formik } from "formik";

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
        timestamp: post?.timestamp,
      }}
      onSubmit={(values) => {
        values.timestamp = Date.now();
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && errors.title}
          <input
            type="text"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          {errors.content && touched.content && errors.content}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default PostForm;
