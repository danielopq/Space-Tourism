import './sectionHeader.css';

interface SectionHeaderProps {
    sectionNumber:string;
    sectionTitle:string;
}
/**
 * Component that contains the header section.
 * @param {string} param0 - Object containing:
 *   - sectionNumber: The number of the section displayed.
 *   - sectionTitle: The title of the section displayed at the top.
 *  
 * @returns {JSX.Element} - Header section.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({sectionNumber,sectionTitle}) => {
    return (
        <div className='sectionHeader'>
            <span className='sectionNumber'>{sectionNumber} </span>
            <span className='sectionTitle'>{sectionTitle}</span>
        </div>
    )
}
export default SectionHeader;
