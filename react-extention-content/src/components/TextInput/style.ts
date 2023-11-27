export default {
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 0,
    marginTop: '24px',
  },
  textField: {
    marginTop: '4px',
    marginBottom: 0,
    backgroundColor: 'white',

    '& .MuiOutlinedInput-input': {
      padding: '11px 16px'
    },
  },
  textFieldError: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ED2222 !important',
    },
  },
};
