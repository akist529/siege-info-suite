import { useState } from 'react'

export default function OperatorLink(props) {
    const { name, description, image } = props
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="OperatorLink" onClick={() => setIsOpen(!isOpen)}>
            <div className="hint-header">
                <div id="operator-name">
                    <img id="operator-icon" alt={name} src={ `/images/ops/icons/${name}.webp` } />
                    <span>{name}</span>
                </div>
                <img id="hint-expand" alt='Expand' src={ isOpen ? '/images/ui/remove.webp' : '/images/ui/add.webp' } />
            </div>
            { isOpen && <div className="hint-content">
                <span>{description}</span>
                { image && <img alt='Operator Hint' src={image} /> }
            </div> }
        </div>
    )
}