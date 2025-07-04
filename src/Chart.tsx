/** @jsxImportSource react */
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Container, Row, Col } from "react-bootstrap";

const data = [
  { subject: "Detection", A: 65, fullMark: 100 },
  { subject: "Development", A: 92, fullMark: 100 },
  { subject: "Python", A: 90, fullMark: 100 },
  { subject: "SIEM", A: 68, fullMark: 100 },
  { subject: "OSINT", A: 80, fullMark: 100 },
  { subject: "Vulnerabilities", A: 64, fullMark: 100 },
  { subject: "Design", A: 80, fullMark: 100 },
  { subject: "GRC", A: 75, fullMark: 100 },
  { subject: "Fullstack", A: 78, fullMark: 100 },
];

const SpiderChartSection = () => {
  return (
    <>
      <style>{`
        .chart-section {
          background-color: #013220;
          padding: 80px 0;
          color: #F0F465;
        }

        .chart-heading {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #ffffff;
          text-align: left;
        }

        .chart-subtext {
          color: #ffffff;
          font-size: 1rem;
          text-align: left;
          max-width: 520px;
          margin-bottom: 1.5rem;
        }

        .chart-badges {
          margin: 1.5rem 0 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .chart-badges .badge {
          background-color: #f0f465;
          color: #013220;
          font-weight: 600;
          padding: 0.4rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
        }

        .quote {
          font-style: italic;
          color: #cfcfcf;
          margin-top: 1rem;
          font-size: 0.95rem;
        }

        .chart-container {
          border-radius: 12px;
          padding: 2rem;
        }

        @media (max-width: 767.98px) {
          .chart-section {
            display: none !important;
            visibility: hidden;
            height: 0;
            overflow: hidden;
          }
        }

        @media (max-width: 768px) {
          .chart-heading {
            font-size: 2rem;
          }

          .chart-subtext {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="chart-section">
        <Container>
          <Row className="align-items-center">
             <Col md={6}>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={data} outerRadius="80%">
                    <PolarGrid stroke="#8A2BE280" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "#FCF75E", fontSize: 12, fontWeight: 300 }}
                      tickLine={false}
                    />
                    <PolarRadiusAxis
                      tick={{ fill: "#FF2D95", fontSize: 10 }}
                      axisLine={false}
                    />
                    <Radar
                      name="Wallace Scott"
                      dataKey="A"
                      stroke="#BFFF00"
                      fill="#000000"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Col>
            <Col md={6}>
              <h2 className="chart-heading">Cybersecurity Arsenal</h2>
              <p className="chart-subtext">
                Mapping core competencies in cyber defense, secure development, and
                digital resilience — a reflection of my journey through code,
                vigilance, and innovation.
              </p>

              <div className="chart-badges">
                <span className="badge">Cybersecurity</span>
                <span className="badge">DevSecOps</span>
                <span className="badge">Python</span>
                <span className="badge">Fullstack</span>
                <span className="badge">Threat Intel</span>
              </div>

              <p className="quote">
                “The more you sweat in practice, the less you bleed in war.”
              </p>
            </Col>

           
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SpiderChartSection;
