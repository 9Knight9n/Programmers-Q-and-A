import React, { Component } from 'react';
import './CSS/texteditor.css';
import * as React from "react";
import {
    DateInput,
    Edit,
    EditButton,
    TextInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
 
const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};
 
class Texteditor extends Component {
  state = {  }
  render() { 
    return (    <Edit title={<PostTitle />} {...props}>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title" validation={{ required: true }} />
      <TextInput multiline source="teaser" validation={{ required: true }} />
      <RichTextInput source="body" validation={{ required: true }} />
      <DateInput label="Publication date" source="published_at" />
    </Edit> );
  }
}
 
export default Texteditor;
              
        




      