import { profile } from "@/data/profile";

export function ExecutiveCard() {
  return (
    <div className="executive-card">
      <div className="executive-card-inner">
        <div className="executive-card-header">
          <span>Official Record</span>
          <div className="executive-card-dots">
            <i /><i /><i />
          </div>
        </div>

        <div className="executive-card-content">
          <div className="executive-item">
            <span>Role &amp; Tenancy</span>
            <strong>Principal (2023 – Present)</strong>
            <small>Motilal Nehru College</small>
          </div>
          
          <div className="executive-item">
            <span>Discipline</span>
            <strong>Professor of Chemistry</strong>
            <small>University of Delhi</small>
          </div>
          
          <div className="executive-item">
            <span>Research Focus</span>
            <strong>Chemical Kinetics &amp; Coordination</strong>
          </div>
          
          <div className="executive-item">
            <span>Governance</span>
            <strong>Member Secretary</strong>
            <small>Governing Body</small>
          </div>
        </div>

        <div className="executive-card-footer">
          <span className="executive-seal">{profile.firstName.charAt(0)}{profile.lastName.charAt(0)}</span>
          <div className="executive-coord">
            28.54° N / 77.20° E
          </div>
        </div>
      </div>
    </div>
  );
}
