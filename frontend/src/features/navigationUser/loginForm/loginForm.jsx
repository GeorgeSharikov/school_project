import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthActions, userLogIn } from '../../../store/userAuthSlice/slice';
import { userAuthSelectors } from '../../../store/userAuthSlice/slice';
import {useActions} from '../../../shared/hooks/useActions'
import styles from './ui.module.css'

export const LoginForm = ({setModalVisible}) => {
    const dispatch = useDispatch()
    const {setLoginError} = useActions(userAuthActions)
    const loginErrors = useSelector(state => userAuthSelectors.getIsLoginError(state))
    const [error, setError] = useState(loginErrors)
    const [validateErrors, setValidateErrors] = useState(false)

    const validate = (values) => {
        const errors = {};
        
        if (!values.email) {
          errors.email = 'Почта обязательна';
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

    const logIn = async (data, callbackSubmit) => {
        setTimeout(() => {
            dispatch(userLogIn(data)).then((res) => { 
                if(!('error' in res)){
                    setModalVisible(false)
                }
                callbackSubmit(false)
            })
        }, 1000)
        
    }

    useEffect(() => {
        setError(loginErrors)
    }, [loginErrors])

    useEffect(() => () => {
            setLoginError(false)
            setValidateErrors(false)
    }, [setLoginError])
    return (
        <div>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={validate} 
            onSubmit={(values, { setSubmitting }) => {
                logIn(values, setSubmitting)
            }}
        >
        {({ isSubmitting, isValid, errors, touched }) => {
            return (
            <Form>

            <div className={styles.inputWrapper}>
                <Field type="email" name="email" 
                className={`${styles.loginFormInput} 
                            ${validateErrors || error ? styles.invalidInput : null}
                            ${isSubmitting ? styles.disabledInput : null}`
                        }
                    placeholder='Почта'/>
                {errors.email && touched.email && <div className={styles.fieldError}>{errors.email}</div>}
            </div>
            

            <div className={styles.inputWrapper}>
                <Field type="password" name="password" 
                    className={`${styles.loginFormInput} 
                        ${validateErrors || error ? styles.invalidInput : null}
                        ${isSubmitting ? styles.disabledInput : null}`
                        }
                    placeholder='Пароль'/>
            </div>

            {error && <div className={styles.fieldError}>{error}</div>}
            <button type="submit" disabled={!isValid || isSubmitting} className={isValid 
            ? isSubmitting ?`${styles.submitButton} ${styles.loading}` : styles.submitButton
            : `${styles.disabledButton}`}>
                Вход
            </button>
            
        </Form>
        )}}
        </Formik>
    </div>
    )
}