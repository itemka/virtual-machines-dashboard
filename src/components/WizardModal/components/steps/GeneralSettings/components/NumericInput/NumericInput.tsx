import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Field } from 'formik';
import {
  Box,
  BoxProps,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ErrorInfoIcon from '@/assets/redInfoIcon.svg?react';
import styles from './styles.ts';

interface NumericInputProps {
  name: string;
  label: string;
  value: number;
  suffix: string;
  suffixBufferSpace: number;
  error: boolean | undefined;
  errorMessage?: string;
  buttonLabel: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  containerSx?: BoxProps['sx'];
}

export function NumericInput({
  name,
  label,
  value,
  suffix,
  suffixBufferSpace,
  error,
  errorMessage,
  buttonLabel,
  onIncrement,
  onDecrement,
  onChange,
  containerSx,
}: NumericInputProps) {
  const theme = useTheme();
  const textRef = useRef<HTMLSpanElement>(null);
  const hiddenTextRef = useRef<HTMLSpanElement>(null);
  const [inputWidth, setInputWidth] = useState(0);
  const [showSuffix, setShowSuffix] = useState(true);

  useEffect(() => {
    if (hiddenTextRef.current && textRef.current) {
      const hiddenWidth = hiddenTextRef.current.offsetWidth;
      const fieldWidth = textRef.current.offsetWidth;

      setInputWidth(hiddenWidth);
      setShowSuffix(
        hiddenWidth > 0 && hiddenWidth < fieldWidth - suffixBufferSpace,
      );
    }
  }, [value]);

  return (
    <Box
      sx={[
        styles.container(theme)(error),
        ...(Array.isArray(containerSx) ? containerSx : [containerSx]),
      ]}
    >
      <Field
        name={name}
        as={TextField}
        label={label}
        fullWidth
        innerRef={textRef}
        error={error}
        value={value || ''}
        onChange={onChange}
        variant="outlined"
        InputProps={{
          sx: styles.inputProps,
          inputRef: textRef,
          endAdornment: (
            <InputAdornment position="end">
              <Box display="flex" flexDirection="column">
                <IconButton
                  size="small"
                  onClick={onIncrement}
                  sx={styles.iconButton}
                >
                  <ArrowDropUpIcon />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={onDecrement}
                  sx={styles.iconButton}
                >
                  <ArrowDropDownIcon />
                </IconButton>
              </Box>

              {error && <ErrorInfoIcon style={{ marginLeft: 8 }} />}
            </InputAdornment>
          ),
        }}
      />

      <Box // hide element to measure width of the input text
        component="span"
        ref={hiddenTextRef}
        sx={styles.hiddenText}
      >
        {value}
      </Box>

      {showSuffix && value > 0 && (
        <Typography variant="body1" sx={styles.suffix(theme)(inputWidth)}>
          {suffix}
        </Typography>
      )}

      {error ? (
        <Typography variant="caption" color="error">
          {errorMessage}
        </Typography>
      ) : (
        <Typography variant="caption" color="textSecondary">
          {buttonLabel}
        </Typography>
      )}
    </Box>
  );
}
