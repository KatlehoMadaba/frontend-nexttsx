import React from 'react';
import { Card, Col, Row } from 'antd';

const ClientCard: React.FC = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content
      </Card>
    </Col>
  </Row>
);

export default ClientCard;