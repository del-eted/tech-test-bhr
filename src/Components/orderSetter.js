import Sorter from './dataSorter'
import Card from 'react-bootstrap/Card'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useState } from 'react'

export default function OrderSetter({unsortedData}) {

    let seperatedFiles = []
    let seperatedFolders = []
    let sortedData = []

    const [sortingValue, setRadioValue] = useState('alphabetical');

    const values = [
      { name: 'alphabetical', value: 'alphabetical' },
      { name: 'size', value: 'size' },
      { name: 'date', value: 'date' },
    ];

    const dataSeperator = (dataToSeperate) => {
        if (dataToSeperate.type === "folder") {
            seperatedFolders.push(dataToSeperate)
        } else {
            seperatedFiles.push(dataToSeperate)
        }
    }

    unsortedData.map(unsortedData => (dataSeperator(unsortedData)))

    const dataSorter = (sortingOrder) => {
        if (sortingOrder === "alphabetical") {
            seperatedFolders.sort((a, b) => {
                return a.name - b.name
            })
            sortedData.push(seperatedFolders)
            seperatedFiles.sort((a, b) => {
                return a.name.localeCompare(b.name)

            })} else if (sortingOrder === "date") {
                seperatedFolders.sort((a, b) => {
                    return a.added - b.added
                })
                sortedData.push(seperatedFolders)
                seperatedFiles.sort((a, b) => {
                    return a.added - b.name

                })} else if (sortingOrder === "size") {
                    seperatedFolders.sort((a, b) => {
                        return a.size - b.size
                    })
                    sortedData.push(seperatedFolders)
                    seperatedFiles.sort((a, b) => {
                        return a.size - b.size
                    })}
            sortedData = seperatedFolders.concat(seperatedFiles)      
    }

    return (
        <div>
            <Card className="mb-5 fw-bold">
                Sort files by:
            <ButtonGroup className="mb-2">
                {values.map((sortValue, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant="secondary"
                    value={sortValue.value}
                    checked={sortingValue === sortValue.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                {sortValue.name}
                </ToggleButton>
                ))}
            </ButtonGroup>
            </Card>
            <Card>
                {dataSorter(sortingValue)}
                <Sorter arrayToCheck={sortedData}/>
            </Card>

        </div>
    )
}