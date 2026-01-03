import { TemplateStandard } from './TemplateStandard';
import { TemplateModern } from './TemplateModern';
import { TemplateMinimal } from './TemplateMinimal';

export function CVPreview({ cv, setTemplate }) {
    const handlePrint = () => {
        window.print();
    };

    const TemplateMap = {
        standard: TemplateStandard,
        modern: TemplateModern,
        minimal: TemplateMinimal
    };

    const ActiveComponent = TemplateMap[cv.activeTemplate || 'standard'];

    return (
        <div className="preview-pane">
            <div className="preview-toolbar">
                <div className="template-switcher">
                    <button
                        className={`btn-sm ${(!cv.activeTemplate || cv.activeTemplate === 'standard') ? 'active' : ''}`}
                        onClick={() => setTemplate('standard')}
                    >
                        Standard
                    </button>
                    <button
                        className={`btn-sm ${cv.activeTemplate === 'modern' ? 'active' : ''}`}
                        onClick={() => setTemplate('modern')}
                    >
                        Modern
                    </button>
                    <button
                        className={`btn-sm ${cv.activeTemplate === 'minimal' ? 'active' : ''}`}
                        onClick={() => setTemplate('minimal')}
                    >
                        Minimal
                    </button>
                </div>
                <button className="btn-primary" onClick={handlePrint}>Download PDF</button>
            </div>
            <div className="cv-container">
                <ActiveComponent data={cv} />
            </div>
        </div>
    );
}
