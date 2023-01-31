import React from 'react'

export const ApButton = ({ label }: { label: string }) => {
  return <button onClick={() => console.log('Test with sian!')}>{label}</button>
}
