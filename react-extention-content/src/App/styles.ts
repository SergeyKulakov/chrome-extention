export default {
  container: {
    boxSizing: 'border-box',
    width: '360px',
    background: '#FEFEFE',
    borderRadius: '8px',
    padding: '24px 22px',
  },

  containerPopup: {
    paddingRight: 0,
    border: '1px solid #919EAB',
  },

  withoutLinkIsTitle: {
    marginTop: '32px',
    marginBottom: '8px',
    fontWeight: 700,
    fontSize: '20px',
  },

  withoutLinkIsText: {
    margin: 0,
    padding: 0,
    fontSize: '12px',
  },

  inlineElementWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
    padding: 0,

    '& .MuiContainer-disableGutters': {
      display: 'none',
    },
  },

  textWidthWrapper: {
    width: '316px',
    overflow: 'hidden',
  },

  textWidthContent: {
    textAlign: 'left',
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  codeValue3: {
    marginTop: '16px',
  },

  textBold: {
    paddingLeft: 8,
    fontWeight: 600,
  },

  textBoldTitle: {
    paddingBottom: 4,
    fontWeight: 600,
  },

  codeValueBtnWrapper: {
    display: 'flex',
    maxWidth: 456,
  },

  actionButton: {
    maxWidth: '100%',
    width: 220,
    marginRight: 2,
    textTransform: 'none',
  },

  whyNeedDescription: {
    textAlign: 'center',
    margin: '24px 0 48px',
  },

  howItWorksClientTitle: {
    marginBottom: '8px',
  },

  howItWorksClientContainer: {
    display: 'flex',
  },

  howItWorksClientContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  submitBtn: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: '22px',
  },
};
