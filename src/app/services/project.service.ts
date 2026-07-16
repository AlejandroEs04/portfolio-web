import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Project } from "../types";

@Injectable({ providedIn: 'root' })
export class ProjectService {
    private http = inject(HttpClient)
    private apiUrl = environment.apiUrl;

    getProjects() {
        return this.http.get<Project[]>(`${this.apiUrl}/projects`)
    }

    getProjectById(id: number) {
        return this.http.get<Project>(`${this.apiUrl}/projects/${id}`)
    }
}