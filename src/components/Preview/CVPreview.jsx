import { TemplateStandard } from './TemplateStandard';

export function CVPreview({ cv }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="preview-pane">
            <div className="preview-toolbar">
                <button className="btn-primary" onClick={handlePrint}>Download PDF</button>
            </div>
            <div className="cv-container">
                <TemplateStandard data={cv} />
            </div>
        </div>
    );
}
