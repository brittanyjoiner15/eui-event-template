import {
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiGlobalToastList,
  EuiText,
  useGeneratedHtmlId,
  EuiBottomBar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiToast,
  EuiLink,
} from "@elastic/eui";
import React, { useState } from "react";
import { webAppUrl as url } from "../utilities/env";
import { getColorTheme } from "../utilities/colors";

// sign-up data lives in this spreadsheet: https://docs.google.com/spreadsheets/d/1XgyHXaReTZ3Nq_r7QS18GDvqK_ht010QqnI6PXAnePA/edit#gid=1988825686

export default (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // show of modal
  const [isValidName, setIsValidName] = useState(false); // valid name or not
  const [isValidEmail, setIsValidEmail] = useState(false); // valid email or not
  const [loading, setIsLoading] = useState(false); // loading screen to show or not
  const [toasts, setToasts] = useState([]); // toast messages we can append in here, they will show top of 'em

  const addToastHandler = () => {
    const toast = {
      title: "Successfully Signed Up",
      color: "success",
      text: <p>Thanks for registering!</p>,
    };
    setToasts(toasts.concat(toast));
  };

  const removeToast = (removedToast) => {
    setToasts(toasts.filter((toast) => toast.id !== removedToast.id));
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const validateName = (name) => {
    // empty, numbers and special characters ❌
    // multiple words ✅
    let validRegex = /^[A-Za-z]+([\ A-Za-z]+)*/;
    if (!name.match(validRegex)) return setIsValidName(false);
    return setIsValidName(true);
  };

  const validateEmail = (email) => {
    // @ at starting ❌
    // com,in after dot take care of ❌
    // dot before and then @ ❌
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(validRegex)) return setIsValidEmail(false);
    return setIsValidEmail(true);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await fetch(`${url}?action=signup`, {
        // signup is the function name in our appscript logic.
        redirect: "follow", // ** IMP ** Otherwise Gives CORS error.
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });
      addToastHandler();
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
    closeModal();
    setUser({
      name: "",
      email: "",
    });
  };

  const inputHandler = (e) => {
    if (e.target.name === "name") validateName(e.target.value);
    if (e.target.name === "email") validateEmail(e.target.value);
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const modalFormId = useGeneratedHtmlId({ prefix: "modalForm" });

  const closeModal = () => setIsModalVisible(false);

  const showModal = () => setIsModalVisible(true);

  let errors = ["Invalid Name", "Invalid Email"];

  const formSample = (
    <EuiForm id={modalFormId} component="form">
      <EuiFormRow label="Name" isInvalid={!isValidName} error={errors[0]}>
        <EuiFieldText
          name="name"
          onChange={inputHandler}
          value={user.name}
          placeholder="Your Full Name"
          autoComplete="off"
          isInvalid={!isValidName}
        />
      </EuiFormRow>

      <EuiFormRow label="Email" isInvalid={!isValidEmail} error={errors[1]}>
        <EuiFieldText
          name="email"
          onChange={inputHandler}
          value={user.email}
          autoComplete="off"
          placeholder="Your Email"
          isInvalid={!isValidEmail}
        />
      </EuiFormRow>
    </EuiForm>
  );

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiModal onClose={closeModal} initialFocus="[name=name]">
        {loading ? (
          <>
            <EuiModalHeader>
              <EuiModalHeaderTitle>
                <h1>Sending Over The Details...😍</h1>
              </EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>
              <h2>👋🏻 {user.name}, wish you a great day!</h2>
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty onClick={closeModal}>Close</EuiButtonEmpty>
            </EuiModalFooter>
          </>
        ) : (
          <>
            <EuiModalHeader>
              <EuiModalHeaderTitle>
                <h1>Sign Up</h1>
              </EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalBody>{formSample}</EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty onClick={closeModal}>Cancel</EuiButtonEmpty>

              <EuiButton
                type="submit"
                disabled={!isValidEmail || !isValidName}
                form={modalFormId}
                onClick={formHandler}
                fill
              >
                Save My Spot 🙌🏻
              </EuiButton>
            </EuiModalFooter>
          </>
        )}
      </EuiModal>
    );
  }

  return (
    <>
      <EuiBottomBar position="static" style={{ backgroundColor: `${getColorTheme("bb_bgColor", props.theme)}`,}}>
          <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
            <EuiFlexItem grow={false} >
              <EuiText color={getColorTheme("text", props.theme)}>
                <h5>
                  Hosted by Dunder Mifflin, Parks & Recreation Department
                </h5>
              </EuiText>
              <EuiText color={getColorTheme("text", props.theme)}>\
              <h6>
                Group for all paper enthusiasts and bureaucrats
              </h6>  
              </EuiText>
            </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup
              direction="row"
              alignItems="center"
              justifyContent="center"
              responsive={false}
            >
              <EuiFlexItem grow={false}>
                <EuiLink href="#" target="_blank" className="social-links">
                  <EuiText color="#f9744e">
                    <i className="social-icons fa-brands fa-facebook"></i>
                  </EuiText>
                </EuiLink>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink href="#" target="_blank" className="social-links">
                  <EuiText color="#7dd656">
                    <i className="social-icons fa-brands fa-twitter"></i>
                  </EuiText>
                </EuiLink>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink href="#" target="_blank" className="social-links">
                  <EuiText color="#ffde59">
                    <i className="social-icons fa-brands fa-linkedin"></i>
                  </EuiText>
                </EuiLink>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink href="#" target="_blank" className="social-links">
                  <EuiText color="#c96ae3">
                    <i className="social-icons fa-brands fa-instagram"></i>
                  </EuiText>
                </EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiButton color="success" fill onClick={showModal}>
                  Sign up for updates
                </EuiButton>
                {modal}
                <EuiGlobalToastList
                  toasts={toasts}
                  dismissToast={removeToast}
                  toastLifeTimeMs={2500}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton color="primary" fill href="#" target={"_blank"}>
                  Join the slack group
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiBottomBar>
    </>
  );
};
