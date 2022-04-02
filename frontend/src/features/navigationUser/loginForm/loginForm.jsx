import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserApi } from '../../../shared/api/api';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from '../../../store/userAuthSlice/slice';
import { userAuthSelectors } from '../../../store/userAuthSlice/slice';

export const LoginForm = () => {
    const dispatch = useDispatch()
    const loginErrors = useSelector(state => userAuthSelectors.getIsLoginError(state))
    const [error, setError] = useState(loginErrors)
    console.log(error, loginErrors)
    const logIn = async (data) => {
        dispatch(userLogIn(data))
    }
    useEffect(() => {
        setError(loginErrors)
    }, [loginErrors])
    return (
        <div>
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                logIn(values)
                setSubmitting(false)
            }}
        >
        {({ isSubmitting }) => (
        <Form>

            <Field type="email" name="email" />

            <Field type="password" name="password" />

            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
            {error && <h1>{error}</h1>}
        </Form>
        )}
        </Formik>
    </div>
    )
}