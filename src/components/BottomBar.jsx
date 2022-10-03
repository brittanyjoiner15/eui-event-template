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

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [disabled, setIsDisabled] = useState(true);
  const [toasts, setToasts] = useState([]);

  const addToastHandler = () => {
    const toast = {
      title: "Successfully Signed Up",
      color: "success",
      text: <p>Thanks for subscribing to us!</p>,
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

  const validateEmailName = (email, name) => {
    if (!email.includes("@") || !email.includes(".") || name == "")
      return false;
    return true;
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (validateEmailName(user.email, user.name)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      return;
    }
    try {
      const data = await fetch(`${url}?action=signup`, {
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
    closeModal();
    setUser({
      name: "",
      email: "",
    });
  };

  const inputHandler = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (validateEmailName(user.email, user.name)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      return;
    }
  };

  const modalFormId = useGeneratedHtmlId({ prefix: "modalForm" });

  const closeModal = () => setIsModalVisible(false);

  const showModal = () => setIsModalVisible(true);

  let errors;

  if (disabled) {
    errors = ["Enter Valid Name", "Enter Valid Email"];
  }

  const formSample = (
    <EuiForm id={modalFormId} component="form" error={errors}>
      <EuiFormRow label="Name">
        <EuiFieldText
          name="name"
          onChange={inputHandler}
          value={user.name}
          placeholder="Your Full Name"
          autoComplete="off"
        />
      </EuiFormRow>

      <EuiFormRow label="Email">
        <EuiFieldText
          name="email"
          onChange={inputHandler}
          value={user.email}
          autoComplete="off"
          placeholder="Your Email"
        />
      </EuiFormRow>
    </EuiForm>
  );

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiModal onClose={closeModal} initialFocus="[name=name]">
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
            disabled={disabled}
            form={modalFormId}
            onClick={formHandler}
            fill
          >
            Send Details 🙌🏻
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  }

  return (
    <>
      <EuiBottomBar position="static">
        <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
          <EuiFlexItem grow={false}>
            <EuiText>
              <h4>
                Hosted by Dunder Mifflin and Parks and Recreation Department
              </h4>
            </EuiText>
            <EuiText>Group for all paper enthusiasts and bureaucrats</EuiText>
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
                  toastLifeTimeMs={4000}
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
