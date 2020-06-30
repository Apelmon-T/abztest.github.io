import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const FileInput = styled(Form)``;

class FieldFileInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {
      labelName: "Upload your photo",
    };
  }

  onChange = (e) => {
    const file = e.target.files[0];
    const {
      input: { onChange },
    } = this.props;

    console.log(file.name);

    if (file) {
      const localImageUrl = URL.createObjectURL(file);
      const imageObject = new window.Image();
      imageObject.onload = () => {
        file.width = imageObject.naturalWidth;
        file.height = imageObject.naturalHeight;
        onChange(file);
        URL.revokeObjectURL(file);
      };
      imageObject.src = localImageUrl;
    }
    onChange(file);

    this.setState({
      labelName: file.name,
    });
  };

  render() {
    const { labelName } = this.state;
    return (
      <FileInput>
        <Form.File
          id="custom-file-translate-scss"
          label={labelName}
          lang="en"
          onChange={this.onChange}
          accept=".jpeg, .jpg"
          custom
        />
      </FileInput>
    );
  }
}

export default FieldFileInput;
