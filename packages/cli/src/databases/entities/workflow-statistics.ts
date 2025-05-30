import { DateTimeColumn } from '@n8n/db';
import { Column, Entity, ManyToOne, PrimaryColumn } from '@n8n/typeorm';

import { WorkflowEntity } from './workflow-entity';

export const enum StatisticsNames {
	productionSuccess = 'production_success',
	productionError = 'production_error',
	manualSuccess = 'manual_success',
	manualError = 'manual_error',
	dataLoaded = 'data_loaded',
}

@Entity()
export class WorkflowStatistics {
	@Column()
	count: number;

	@Column()
	rootCount: number;

	@DateTimeColumn()
	latestEvent: Date;

	@PrimaryColumn({ length: 128 })
	name: StatisticsNames;

	@ManyToOne('WorkflowEntity', 'shared')
	workflow: WorkflowEntity;

	@PrimaryColumn()
	workflowId: string;
}
