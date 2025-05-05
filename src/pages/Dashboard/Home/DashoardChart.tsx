import Translations from '@/components/Translations'
import { Box, IconButton, Stack, styled, Typography } from '@mui/material'
import {
  AreaPlot,
  BarPlot,
  ChartsTooltip,
  ChartsYAxis,
  LinePlot,
  MarkPlot,
  ResponsiveChartContainer
} from '@mui/x-charts'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import { useCallback, useEffect, useState } from 'react'
import { getPrices } from '@/services/priceServices'
import { PriceResponse } from '@/types/price'

function AreaGradient({ color, darkId, lightId }: { color: string; darkId: string; lightId: string }) {
  return (
    <defs>
      <linearGradient id={darkId} x1='50%' y1='0%' x2='50%' y2='100%'>
        <stop offset='0%' stopColor={color} stopOpacity={0.3} />
        <stop offset='100%' stopColor={color} stopOpacity={0} />
      </linearGradient>

      <linearGradient id={lightId} x1='50%' y1='0%' x2='50%' y2='100%'>
        <stop offset='0%' stopColor={color} stopOpacity={0.3} />
        <stop offset='100%' stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  )
}

const ChartButton = styled(Box)(({ theme }) => ({
  background: 'none',
  fontSize: '10px',
  borderRadius: '6px',
  border: 'none',
  color: theme.palette.text.primary,
  fontFamily: 'Inter',
  padding: '8px 16px',
  height: '34px',
  transition: 'all .3s ease-out',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    padding: '7px 10px'
  },
  '&:hover': {
    background: '#FFF',
    ...theme.applyStyles('dark', {
      background: '#343434'
    })
  }
}))

export default function DashboardChart() {
  const [dataIndex, setDataIndex] = useState<number>(0)
  const [period, setPeriod] = useState<string>('1d')
  const [series, setSeries] = useState<number[]>([])
  const [xAxis, setXAxis] = useState<number[]>([])

  const fetchData = useCallback(async (input: string) => {
    try {
      setPeriod(input)
      const response = await getPrices(input)
      const prices = (response as PriceResponse).data.prices
      const newSeries = [],
        newXAxis = []
      for (let i = 0; i < prices.length; i++) {
        newSeries[i] = prices[i][1]
        newXAxis[i] = prices[i][0]
      }
      setSeries(newSeries)
      setXAxis(newXAxis)
    } catch {}
  }, [])

  useEffect(() => {
    fetchData('1d')
  }, [])

  return (
    <Stack direction='column' spacing='20px' width='100%'>
      <Stack direction='row' justifyContent='space-between'>
        <Stack direction='row'>
          <ChartButton
            sx={theme => ({
              background: dataIndex === 0 ? theme.palette.success.dark : 'none'
            })}
            onClick={() => setDataIndex(0)}
          >
            <Translations text='chart.price' />
          </ChartButton>
          <ChartButton
            sx={theme => ({
              background: dataIndex === 1 ? theme.palette.success.dark : 'none'
            })}
            onClick={() => setDataIndex(1)}
          >
            <Translations text='chart.chart' />
          </ChartButton>
        </Stack>
        <Stack direction='row' alignItems='center'>
          <ChartButton
            sx={theme => ({
              background: period === '1d' ? theme.palette.success.dark : 'none'
            })}
            onClick={() => fetchData('1d')}
          >
            1D
          </ChartButton>
          <ChartButton
            sx={theme => ({
              background: period === '1w' ? theme.palette.success.dark : 'none'
            })}
            onClick={() => fetchData('1w')}
          >
            1W
          </ChartButton>
          <ChartButton
            sx={theme => ({
              background: period === '1m' ? theme.palette.success.dark : 'none'
            })}
            onClick={() => fetchData('1m')}
          >
            1M
          </ChartButton>
          <ChartButton
            sx={theme => ({
              background: period === '1m' ? theme.palette.info.dark : 'none'
            })}
            onClick={() => fetchData('1m')}
          >
            1M
          </ChartButton>
          <IconButton sx={theme => ({ color: '#FFD258', ...theme.applyStyles('light', { color: '#000' }) })}>
            <CalendarMonthOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack width='100%' direction='row' spacing='10px' height='323px'>
        <ResponsiveChartContainer
          series={[
            {
              type: 'line',
              data: series,
              area: true,
              baseline: 'min',
              curve: 'linear',
              color: '#FFD258',
              yAxisId: 'y-axis-id',
              showMark: ({ value }) => value === Math.min(...series) || value === Math.max(...series)
            }
          ]}
          xAxis={[
            {
              data: xAxis,
              scaleType: 'band'
            }
          ]}
          yAxis={[
            {
              valueFormatter: value => `${value.toLocaleString()}`,
              scaleType: 'linear',
              id: 'y-axis-id'
            }
          ]}
          height={340}
          sx={theme => ({
            '& .MuiAreaElement-root': {
              fill: 'url(#darkGradient)',

              ...theme.applyStyles('light', {
                fill: 'url(#lightGradient)'
              })
            },

            '& .MuiBarElement-root': {
              fill: '#E5AE21',

              ...theme.applyStyles('light', {
                fill: '#E5AE21'
              })
            },

            '& .MuiLineElement-root': {
              strokeWidth: '3px',
              stroke: '#E5AE21',

              ...theme.applyStyles('light', {
                stroke: '#E5AE21'
              })
            },

            '& .MuiMarkElement-root': {
              fill: '#E5AE21',
              filter: `drop-shadow(0px 0px 3px ${'#E5AE21'})`,

              ...theme.applyStyles('light', {
                fill: '#E5AE21',
                filter: `drop-shadow(0px 0px 3px #E5AE21)`
              }),

              '&:first-child': {
                fill: '#FF7070',
                filter: `drop-shadow(0px 0px 3px #FF7070)`
              }
            },

            '& .MuiChartsAxis-tickLabel': {
              fontSize: '14px !important',
              lineHeight: '18px !important',
              fontWeight: '500 !important'
            },

            '& line': {
              display: 'none'
            }
          })}
        >
          <BarPlot />
          <AreaPlot />
          <LinePlot />
          <MarkPlot />
          <ChartsYAxis position='left' axisId='y-axis-id' />
          <ChartsTooltip
            slotProps={{
              popper: {
                sx: {
                  ['& .MuiChartsTooltip-table']: {
                    border: 'none'
                  },
                  ['& .MuiChartsTooltip-table thead']: {
                    display: 'none'
                  }
                }
              }
            }}
          />
          <AreaGradient color='#FFD258' darkId='darkGradient' lightId='lightGradient' />
        </ResponsiveChartContainer>
      </Stack>
    </Stack>
  )
}
