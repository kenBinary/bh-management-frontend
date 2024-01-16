export default function ReportCard({ name, data, icon }) {
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {data}
            </div>
            <div>
                <img className="icon" src={icon} alt="" />
            </div>
        </div>
    );
}