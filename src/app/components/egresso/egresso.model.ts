export interface Egresso {
    id?: number,
    name: string,
	data_nascimento?: string,  
	entrada_ufu: string , 
	saida_ufu: string , 
	tempo_curso: string  ,
	tempo_formado: string  ,
	bolsas: string  ,
	estagios_area: string  ,
	trabalha_area_atualmente: string  ,
	quantos_empregos_area: string  ,
	experiencia_profissional: string  ,
	last_update?: Date
}