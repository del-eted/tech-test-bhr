import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'

export default function DataDisplay({arrayToCheck}) {

    let seperatedFiles = []
    let seperatedFolders = []

    const dataSeperator = (dataToSeperate) => {
        if (dataToSeperate.type === "folder") {
            seperatedFolders.push(dataToSeperate)
        } else {
            seperatedFiles.push(dataToSeperate)
        }
    }

    arrayToCheck.map(arrayToCheck => (dataSeperator(arrayToCheck)))

    const FolderListBuilder = (foldersToList) => {
        return <ListGroup>
<               Accordion defayltActiveKey="0">
                <Accordion.Header >
                    <div className="fw-bold">{foldersToList.name}</div></Accordion.Header>
                <Accordion.Body key={foldersToList.name}>
                    {foldersToList.files.map(newArray => FileListBuilder(newArray))}
                </Accordion.Body>
            </Accordion>
        </ListGroup>
    }

    const FileListBuilder = (fileToList) => {
        return <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div>{fileToList.name}</div>
                {fileToList.type}
        </ListGroup.Item>
    }

    return (
            <div>
                {seperatedFolders.map(seperatedFolders => (
                    FolderListBuilder(seperatedFolders)
                    ))}
                <ListGroup as="ol">
                    {seperatedFiles.map(seperatedFiles => (
                    FileListBuilder(seperatedFiles)
                    ))}
                </ListGroup>
            </div>
    )
}