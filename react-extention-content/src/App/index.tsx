import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import SubmitButton from '../components/SubmitButton';
import TextInput from '../components/TextInput';
import TextInputCopy from '../components/TextInputCopy';
import { RoundDefaultButton, ErrorTypography } from '../ui';
import globalStyles from '../globalStyles';
import { getValidationSchema } from './constants';
import styles from './styles';

type DecodeCredentials = {
  codeFromGoogleSearch: string;
  isPopup?: boolean;
};

type SetUpNewCodeCredentials = {
  code: string;
};

const Decode = ({ codeFromGoogleSearch, isPopup }: DecodeCredentials) => {
  const [isNewCode, setIsNewCode] = useState(false);
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(!!codeFromGoogleSearch);

  useEffect(() => {
    if (codeFromGoogleSearch) {
      handleDecode(codeFromGoogleSearch);
    }
  }, []);

  const handleDecode = async (codeFromGoogleSearch: string) => {
    await fetch(`https://api.withoutlink.com/decode/${codeFromGoogleSearch}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) =>
        res.json().then((resData) => {
          setData(resData);
          setIsLoading(false);
        })
      )
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleSetUpNewCode = (values: SetUpNewCodeCredentials) => {
    setIsNewCode(false);
    setIsLoading(true);
    handleDecode(values.code);
  };

  const handleOpenWebPage = () => {
    window.open(data?.value, '_blank');
  };

  const initialValues = {
    code: codeFromGoogleSearch,
  };

  const onSubmit = (values: DecodeCredits) => {
    handleSetUpNewCode(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: getValidationSchema,
    onSubmit,
  });

  const {
    touched,
    errors,
    setValues,
    resetForm,
    handleChange,
    handleSubmit,
    values,
  } = formik;
  const isError = !!(touched.code && errors.code) || data?.message;
  const isSuccessGetCompanyInfo = !!data?.company && !isNewCode;

  const handleNewCode = () => {
    setIsNewCode(true);
    resetForm();
    setValues({ code: '' });
  };

  return (
    <Box
      sx={{
        ...styles.container,
        ...{ paddingRight: 0, border: isPopup ? 'none' : '1px solid #919EAB' },
      }}
    >
      <Box className="logoTextWithoutLink" />
      <Box width="100%">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Grid width="100%">
            <Typography
              variant="h1"
              style={{
                ...globalStyles.defaultText,
                ...styles.withoutLinkIsTitle,
              }}
            >
              {isSuccessGetCompanyInfo ? 'Here is your link' : 'Get your link'}
            </Typography>
            <Typography
              variant="body1"
              style={{
                ...globalStyles.defaultText,
                ...styles.withoutLinkIsText,
              }}
              textAlign={'left'}
            >
              {isSuccessGetCompanyInfo
                ? 'Proceed to the website or copy the link below'
                : 'Insert your code to the field below'}
            </Typography>
            <form
              style={{
                ...{
                  position: 'relative',
                  width: '100%',
                },
              }}
              onSubmit={handleSubmit}
              noValidate
            >
              {isSuccessGetCompanyInfo ? (
                <Box
                  component="div"
                  sx={{
                    ...styles.inlineElementWrapper,
                    ...{ marginTop: '16px', marginBottom: '16px' },
                  }}
                >
                  <TextInputCopy
                    autoFocus
                    name="code"
                    isError={isError}
                    disabled={true}
                    placeholder="Paste your code"
                    autoComplete="off"
                    value={data.value}
                    onChange={handleChange}
                  />
                  <Box className="verifiedLinkWithoutlink" />
                </Box>
              ) : (
                <div style={{ paddingRight: '22px' }}>
                  <TextInput
                    autoFocus
                    required
                    label="Your code"
                    name="code"
                    isError={isError}
                    placeholder="Paste your code"
                    autoComplete="off"
                    value={values.code}
                    onChange={handleChange}
                    style={{
                      borderRadius: '8px !important',
                      marginRight: '22px',
                    }}
                  />
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                {isError && (
                  <ErrorTypography
                    text={`${
                      data?.message
                        ? 'Invalid code'
                        : 'Code field is the required field'
                    }`}
                  />
                )}
              </div>
              {isSuccessGetCompanyInfo && (
                <div>
                  <Box
                    component="div"
                    sx={{
                      ...styles.inlineElementWrapper,
                      ...{ marginBottom: '8px' },
                    }}
                  >
                    <Box className="yourCodeWithoutLink" />
                    <Typography
                      style={{
                        ...globalStyles.defaultText,
                      }}
                    >
                      Your code:
                      <Box component="span" style={styles.textBold}>
                        {values.code || ''}
                      </Box>
                    </Typography>
                  </Box>
                  <div style={styles.textWidthWrapper}>
                    <Box
                      component="div"
                      sx={{
                        ...styles.inlineElementWrapper,
                        ...{ marginBottom: '8px' },
                      }}
                    >
                      <Box className="companyNameWithoutLink" />
                      <Typography style={globalStyles.defaultText}>
                        Company name:
                        <Box
                          component="span"
                          sx={{ ...styles.textBold, paddingLeft: '8px' }}
                        >
                          {data.company || ''}
                        </Box>
                      </Typography>
                    </Box>
                  </div>
                  <div style={styles.textWidthWrapper}>
                    <Typography
                      style={{
                        ...globalStyles.defaultText,
                        ...styles.codeValue3,
                      }}
                    >
                      <Box component="span" style={styles.textBoldTitle}>
                        Description:
                      </Box>
                      <Box sx={styles.textWidthContent}>
                        {data.purpose || ''}
                      </Box>
                    </Typography>
                  </div>
                </div>
              )}
              {isSuccessGetCompanyInfo ? (
                <Box
                  sx={{
                    ...globalStyles.formSumbitBtn,
                    ...styles.codeValueBtnWrapper,
                  }}
                >
                  <RoundDefaultButton
                    text={'Enter another code'}
                    variant={'outlined'}
                    color={'primary'}
                    style={styles.actionButton}
                    fullWidth={false}
                    onClick={handleNewCode}
                  />
                  <RoundDefaultButton
                    text={'Open web page'}
                    variant={'contained'}
                    color={'primary'}
                    style={{
                      ...styles.actionButton,
                    }}
                    fullWidth={false}
                    onClick={handleOpenWebPage}
                  />
                </Box>
              ) : (
                <SubmitButton
                  text="Submit"
                  isLoading={isLoading}
                  style={{
                    ...globalStyles.formSumbitBtn,
                    ...styles.submitBtn,
                  }}
                />
              )}
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Decode;
