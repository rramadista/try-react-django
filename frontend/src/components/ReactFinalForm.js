import React from "react";
import { Button, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { Form, Field } from "react-final-form";

const onSubmit = values => {
    alert(JSON.stringify(values));
};

const ReactFormExample = () => (
    <Form
        onSubmit={onSubmit}
        validate={values => {
            const errors = {};
            function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
            if (!values.fname) {
                errors.fname = "Required";
            }
            if (!values.lname) {
                errors.lname = "Required";
            }
            if (!values.email) {
                errors.email = "Required";
            } else if (!validateEmail(values.email)) {
                errors.email = "Not an email adress";
            }
            if (!values.password) {
                errors.password = "Required";
            }
            if (!values.tos) {
                errors.tos = "Required";
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = "Required";
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Does not match";
            }
            return errors;
        }}
        render={({ handleSubmit, values, submitting, validating, valid }) => (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="office_name">Office Name</Label>
                            <Field name="office_name">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="branch_id">Branch ID</Label>
                            <Field name="branch_id">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="start_date">Start Date</Label>
                            <Field name="start_date">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="date" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check>
                    <Field name="is_active" type="checkbox">
                        {({ input, meta }) => (
                            <Label>
                                <Input {...input} type="checkbox" invalid={meta.error && meta.touched} />
                                &nbsp;Active
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </Label>
                        )}
                    </Field>
                </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="street">Street Address</Label>
                            <Field name="street">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="building">Building Name</Label>
                            <Field name="building">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="postcode">Postal Code</Label>
                            <Field name="postcode">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Field name="city">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="province">Province</Label>
                            <Field name="province">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="lat">Latitude</Label>
                            <Field name="lat">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="long">Longitude</Label>
                            <Field name="long">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" invalid={meta.error && meta.touched} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </FormGroup>
                    </Col>
                </Row>
                <Button type="submit" color="primary" disabled={!valid}>
                    Submit
                </Button>
            </form>
        )}
    />
);

export default ReactFormExample;