import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from '../../../store/userAuthSlice/slice';
import { userAuthSelectors } from '../../../store/userAuthSlice/slice';
import styles from './ui.module.css'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const loginErrors = useSelector(state => userAuthSelectors.getIsLoginError(state))
    const [error, setError] = useState(loginErrors)
    const [validateErrors, setValidateErrors] = useState(false)
    // console.log(validateErrors)

    const validate = (values) => {
        const errors = {};
        
        if (!values.email) {
          errors.email = 'Обязательна';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Некорректная почта';
        }
        if("email" in errors && !validateErrors){
            setValidateErrors(true)
        }
        if(!("email" in errors) && validateErrors){
            setValidateErrors(false)
        }
        return errors;
      };

    const logIn = async (data) => {
        // console.log(data)
        setTimeout(() => {
            dispatch(userLogIn(data))
        }, 5000)
        
    }

    useEffect(() => {
        setError(loginErrors)
        return () => {
            setError(loginErrors)
            setValidateErrors(false)
        }
    }, [loginErrors])
    return (
        <div>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={validate} 
            onSubmit={(values, { setSubmitting }) => {
                logIn(values)
                setSubmitting(false)
            }}
        >
        {({ isSubmitting, isValid, errors, touched }) => {
            console.log(isSubmitting)
            return (
            <Form>

            <div className={styles.inputWrapper}>
                <Field type="email" name="email" 
                    className={!validateErrors? styles.loginFormInput : `${styles.loginFormInput} ${styles.invalidInput}`} 
                    placeholder='Почта'/>
                {errors.email && touched.email && <div className={styles.fieldError}>{errors.email}</div>}
            </div>
            

            <div className={styles.inputWrapper}>
                <Field type="password" name="password" className={styles.loginFormInput} placeholder='Пароль'/>
            </div>

            {error && <h3>{error}</h3>}
            <button type="submit" disabled={!isValid || isSubmitting} className={isValid ? styles.submitButton : `${styles.disabledButton}`}>
                Вход
            </button>
            
        </Form>
        )}}
        </Formik>
    </div>
    )
}