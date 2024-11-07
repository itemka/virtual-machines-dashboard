import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Box, Typography, useTheme } from '@mui/material';
import IndicatorIcon from '@/assets/indicator.svg?react';
import VerticalVectorIcon from '@/assets/verticalVectorIcon.svg?react';
import LineIcon from '@/assets/line.svg?react';
import styles from './styles.ts';

interface RamSliderWithIndicatorProps {
  value: number;
}

export function RamSliderWithIndicator({ value }: RamSliderWithIndicatorProps) {
  const theme = useTheme();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderOffset, setSliderOffset] = useState({
    left: 0,
    top: 0,
  });

  const ramValue = value || 0;
  const positionPercentage = Math.max(0, Math.min((ramValue / 50) * 100, 100));

  useEffect(() => {
    const updateSliderOffsetAndWidth = () => {
      if (sliderRef.current) {
        const sliderRect = sliderRef.current.getBoundingClientRect();
        const topPosition = sliderRect.top - 10 + window.scrollY;
        const leftPosition =
          sliderRect.left + (sliderRect.width * positionPercentage) / 100;

        setSliderOffset({
          top: topPosition,
          left: leftPosition,
        });
      }
    };

    updateSliderOffsetAndWidth();
    window.addEventListener('resize', updateSliderOffsetAndWidth);

    return () => {
      window.removeEventListener('resize', updateSliderOffsetAndWidth);
    };
  }, [positionPercentage]);

  return (
    <>
      {sliderRef.current &&
        ramValue > 0 &&
        ramValue <= 50 &&
        createPortal(
          // render the indicator outside of the slider container
          <Box
            sx={styles.indicatorContainer(theme)({
              sliderTopOffset: sliderOffset.top,
              sliderLetOffset: sliderOffset.left,
            })}
          >
            <Box sx={styles.purpleMarkerContainer}>
              <IndicatorIcon />

              <Box sx={styles.verticalVectorIcon}>
                <VerticalVectorIcon />
              </Box>
            </Box>

            <Typography variant="body2" sx={styles.currentRamValue}>
              {`${ramValue} GB`}
            </Typography>
          </Box>,
          document.body,
        )}

      <Box ref={sliderRef} sx={styles.sliderContainer}>
        <Box sx={styles.rangeIndicator}>
          <Box sx={styles.greenSection} />
          <Box sx={styles.yellowSection} />
        </Box>

        <Box sx={styles.gbLabelsContainer}>
          <Typography variant="body2" sx={styles.gbLabel}>
            0 GB
          </Typography>
          <Typography variant="body2" sx={styles.gbLabel}>
            16 GB
          </Typography>
          <Typography variant="body2" sx={styles.gbLabel}>
            32 GB
          </Typography>
          <Typography variant="body2" sx={styles.gbLabel}>
            50 GB
          </Typography>
        </Box>

        <Box sx={styles.lineIcon}>
          <LineIcon />
        </Box>

        <Box sx={styles.recommendedContainer}>
          <Typography variant="body2" sx={styles.recommended}>
            Recommended
          </Typography>
        </Box>
      </Box>
    </>
  );
}
