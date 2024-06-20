import { Component, computed, inject } from '@angular/core';

import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  private investmentService = inject(InvestmentResultsService);

  results = computed(() => this.investmentService.resultsData());
}
