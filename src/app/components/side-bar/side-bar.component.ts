import { Component, OnInit } from '@angular/core';
import {WorkspaceService} from '../../services/workspace.service';
import Folder from '../../models/folder';
import Segment from '../../models/Segment';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  folders: Folder[];
  segments: Segment[];

  constructor(private workspaceService: WorkspaceService) {
    this.folders = this.workspaceService.getFolders();
    this.segments = this.workspaceService.getSegments();

    // For testing
    this.folders = [
      { name: 'beSharp', ids: [] },
      { name: 'Noovolari', ids: [] },
      { name: 'DevOps', ids: [] },
      { name: 'Marketing', ids: [] },
      { name: 'Infrastructure', ids: [] }
    ];

    this.segments = [
      { name: 'Region Based', filters: [] },
      { name: 'Architecture', filters: [] },
      { name: 'Commons', filters: [] },
      { name: 'Testing', filters: [] }
    ];
  }

  ngOnInit(): void {
  }

  addFolder(event) {
    event.stopPropagation();
  }

  addSegment(event) {
    event.stopPropagation();
  }
}
